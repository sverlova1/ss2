/*
  # Phone Repair Service Schema

  1. New Tables
    - `phone_repairs`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `brand` (text)
      - `model` (text)
      - `issue_description` (text)
      - `repair_status` (enum)
      - `estimated_cost` (decimal)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `repair_updates`
      - `id` (uuid, primary key)
      - `repair_id` (uuid, references phone_repairs)
      - `status` (text)
      - `notes` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users
*/

-- Create enum for repair status
CREATE TYPE repair_status AS ENUM (
  'pending',
  'diagnosed',
  'in_progress',
  'completed',
  'cancelled'
);

-- Create phone repairs table
CREATE TABLE IF NOT EXISTS phone_repairs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  brand text NOT NULL,
  model text NOT NULL,
  issue_description text NOT NULL,
  repair_status repair_status DEFAULT 'pending',
  estimated_cost decimal(10,2),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create repair updates table
CREATE TABLE IF NOT EXISTS repair_updates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  repair_id uuid REFERENCES phone_repairs ON DELETE CASCADE NOT NULL,
  status text NOT NULL,
  notes text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE phone_repairs ENABLE ROW LEVEL SECURITY;
ALTER TABLE repair_updates ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own repairs"
  ON phone_repairs
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create repairs"
  ON phone_repairs
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view updates for their repairs"
  ON repair_updates
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM phone_repairs
      WHERE phone_repairs.id = repair_updates.repair_id
      AND phone_repairs.user_id = auth.uid()
    )
  );

-- Create function to update timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
CREATE TRIGGER update_phone_repairs_updated_at
    BEFORE UPDATE ON phone_repairs
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();