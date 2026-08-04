export const prompt = `I am a CS student trying to learn with project based learning. Please generate an idea for a project based on the following project description or concepts to learn provided below and give me a roadmap of how to make it. I would like for you to give me a title (not too long), a simple description of the project, the main user flow (1-3 depending on the scope), the tech stack, the milestones and sub issues (for GitHub), possible future features for expansion (3-5), the core concepts used/learned (5-7), and README text explaining how to start the project (initialization, etc.) and the a overview of the project architecture. Please respond in the following JSON form:

{
  "title": "",
  "description": "",
  "user_flows": [
    {
      "name": "",
      "steps": [
        "",
      ]
    },
  ],
  "tech_stack": [
    "",
  ],
  "milestones": [
    {
      "name": "",
      "issues": [
        {
          "name": "",
          "requirements": ""
        }
      ]
    },
  ],
  "future_features": [
    ""
  ],
  "core_concepts": [
    ""
  ],
  "readme": ""
}
  
Please ensure that the response starts with { and ends with }`;
