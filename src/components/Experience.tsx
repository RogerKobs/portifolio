export interface ExperienceProps {
  organization: string;
  organizationLink: string;
  jobRole: string;
  period: string;
  description: string;
}

export function Experience({
  organization,
  organizationLink,
  jobRole,
  period,
  description,
}: ExperienceProps) {
  return (
    <div>
      <a href={organizationLink} target='_blank'>
        <div className='flex justify-center items-center rounded h-72 border-gray-600 hover:border'>
          <div className='flex flex-col w-11/12'>
            <div className='flex flex-col'>
              <strong className='text-3xl text-gray-300'>{organization}</strong>

              <strong className='text-md text-gray-300 my-2'>{jobRole}</strong>

              <strong className='text-gray-500 text-sm'>{period}</strong>
            </div>

            <p className='mt-4'>{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
