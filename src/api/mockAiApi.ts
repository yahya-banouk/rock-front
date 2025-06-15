export const mockMatchJobs = async (cvData: string) => {
    return [
        { title: 'Frontend Developer', company: 'TechCorp', match: 92 },
        { title: 'React Engineer', company: 'DevStudios', match: 87 },
        { title: 'Full Stack Intern', company: 'StartupX', match: 75 },
    ];
};

export const mockMatchTalents = async (jobData: any) => {
    return [
        { name: 'Alice Smith', skills: ['React', 'Tailwind'], match: 93 },
        { name: 'John Doe', skills: ['Vue', 'Node'], match: 81 },
    ];  
};
