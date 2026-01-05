-- Quiz başvurularını kaydetmek için tablo
CREATE TABLE public.quiz_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  role TEXT NOT NULL,
  education_level TEXT,
  school_info TEXT,
  english_level TEXT,
  citizenship TEXT,
  motivation TEXT,
  scholarship_factors TEXT,
  budget TEXT,
  whatsapp TEXT NOT NULL,
  instagram TEXT,
  recommended_package TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- RLS aktif et
ALTER TABLE public.quiz_submissions ENABLE ROW LEVEL SECURITY;

-- Herkes insert yapabilsin (quiz dolduranlar)
CREATE POLICY "Anyone can insert quiz submissions" 
ON public.quiz_submissions 
FOR INSERT 
WITH CHECK (true);

-- Sadece authenticated kullanıcılar görebilsin (admin paneli için)
CREATE POLICY "Authenticated users can view submissions" 
ON public.quiz_submissions 
FOR SELECT 
USING (auth.uid() IS NOT NULL);