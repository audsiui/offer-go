export type TargetJob = {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  jdDescription: string;
  jdRequirements: string;
  createdAt: string;
};

export type CreateJobInput = Omit<TargetJob, 'id' | 'createdAt'>;