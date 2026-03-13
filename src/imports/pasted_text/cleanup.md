I want you to create two complimentary prompts, the cleanup prompt will always be run with the continue prompt, but the continue prompt can be run on its own:

/prompts/cleanup.md
/prompts/continue.md

## Prompt 1

Create a prompt that runs an audit Call the file /prompts/cleanup.md

The prompt should figures out how to clean up the file system, identify any missing routes that need to be added to the routes.ts file, checks for broken imports of CSS and any other JavaScript file files

Clean up the root folder, update the changelog 

update /tasks/ folder, delete completed task list and reports files, update the task lists status within the master task list, update the guide guidelines, update the site map page and update the devtools pages with the latest values from the code base

I want to be able to run this prompts on a regular basis so it shouldn't be multiple sessions it should be one session where it cleans up everything and update statuses and then closes off

## Prompt 2: 

Create another prompt with filename = /prompts/continue.md

continue with next logical task list and tasks in /tasks/ folder based on the status in task-list.md, this file should either have open tasks or point to the next most important task list file. I would like you to create a very simple prompt so that I can get the AI back on track, I'm not sure what an effective continue prompt would be that is generic and reusable

Make sure you remind Figma make every time that it is working in the figma make environment and the not to tell me to refresh my browser or clear my cache because they don't make sense in the figma environment. 

## Bonus 

How can you optimise or improve the 2 prompts, how could I configure trigger words for the prompts so all I write is "cleanup" or "continue" and the guidelines tell AI to run those prompts, which have their own guidelines. What guidelines should you create to benefit the process? Maybe guidelines to clarify parameters for creating reports, exact file names, then how to clean up /tasks/ and /reports/ as well as guard rails to ensure protected files do not get deleted.



Before proceeding with the text below I need you to review the /tasks/ and /reports/ folders, clean out reports older than 7 days only if you are certain they are no longer valid. 

This means you will need to review the violations and feedback in all reports to confirm if they are still present or have been resolved. 

Delete reports after confirming that they are complete.

Write an orchestrator prompt to process reports in /reports/ folder and create the relevant task lists or update existing connected task lists.

Make sure you list all guidelines relevant to the new orchestrator prompt 

You should also update the master task list file and tick off all completed tasks.

Then I can simply run the master task list and it will run all incomplete tasks.





I want you to create two complimentary prompts, the cleanup prompt will always be run with the continue prompt, but the continue prompt can be run on its own:

/prompts/cleanup.md
/prompts/continue.md

## Prompt 1

Create a prompt that runs an audit Call the file /prompts/cleanup.md

The prompt should figures out how to clean up the file system, identify any missing routes that need to be added to the routes.ts file, checks for broken imports of CSS and any other JavaScript file files

Clean up the root folder, update the changelog 

update /tasks/ folder, delete completed task list and reports files, update the task lists status within the master task list, update the guide guidelines, update the site map page and update the devtools pages with the latest values from the code base

I want to be able to run this prompts on a regular basis so it shouldn't be multiple sessions it should be one session where it cleans up everything and update statuses and then closes off

## Prompt 2: 

Create another prompt with filename = /prompts/continue.md

continue with next logical task list and tasks in /tasks/ folder based on the status in task-list.md, this file should either have open tasks or point to the next most important task list file. I would like you to create a very simple prompt so that I can get the AI back on track, I'm not sure what an effective continue prompt would be that is generic and reusable

Make sure you remind Figma make every time that it is working in the figma make environment and the not to tell me to refresh my browser or clear my cache because they don't make sense in the figma environment. 

## Bonus 

How can you optimise or improve the 2 prompts, how could I configure trigger words for the prompts so all I write is "cleanup" or "continue" and the guidelines tell AI to run those prompts, which have their own guidelines. What guidelines should you create to benefit the process? Maybe guidelines to clarify parameters for creating reports, exact file names, then how to clean up /tasks/ and /reports/ as well as guard rails to ensure protected files do not get deleted. 



There are too many guidelines files, you need to write a detailed audit prompt that will systematically review every single guidelines file.

To start off with you need to create templates for each kind of guidelines file and add them to the guidelines templates folder = /guidelines/_templates - I am unsure what templates you need to create. Definitely a dedicated template for design tokens guidelines.

It might also help to create templates for writing reports, prompts, task-lists and docs. They may need to be a guideline file to explain how to use the templates, maybe something like - /guidelines/_templates.md - We could have a general template for general guidelines, a component guidelines template, definitely design tokens guidelines template and you can suggest others if needed. 

IMPORTANT GAURD RAILS: Only once you have moved the files into their new file location or merged a file into another file, then delete the old files. 

You need to start off with auditing the main /guidelines/Guidelines.md file and identifying how we can make the main Guidelines.md file much smaller. Ideally this file should be under 400 lines. Do NOT simply delete the content, plan out the new files, create the new files, then update the Guidelines.md file to reference the new guidelines file and delete the content from the main Guidelines.md file.

I will link to folders and provide audit instructions:

## /guidelines/design-tokens

We need a minimum of the following design tokens guidelines files:

- /guidelines/design-tokens/animations.md
- /guidelines/design-tokens/borders.md
- /guidelines/design-tokens/buttons.md
- /guidelines/design-tokens/colors.md
- /guidelines/design-tokens/dark-light-mode.md
- /guidelines/design-tokens/iconography.md
- /guidelines/design-tokens/radii.md
- /guidelines/design-tokens/responsive.md
- /guidelines/design-tokens/shadows.md
- /guidelines/design-tokens/spacing.md
- /guidelines/design-tokens/typography.md
- /guidelines/design-tokens/forms.md
- /guidelines/design-tokens/touch-targets.md
- /guidelines/design-tokens/navigation.md