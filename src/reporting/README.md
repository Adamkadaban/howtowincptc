# Reporting

## How to Write a Good Report

This section will cover general reporting tips that will help you write an outstanding report.

I've almost entirely based this section on the [BHIS Pentest Reporting course by BB King](https://www.youtube.com/watch?v=rM-MVSe4MiA&ab_channel=BlackHillsInformationSecurity) that is also available as a [pay what you can course from Antisyphon Training](https://www.antisyphontraining.com/pay-what-you-can/).



### General Tips

- Reporting should be done alongside the testing
	- **RAYG: Report as you go.**
	- This will make it easier to ensure your report is complete and that you won't forget anything when you do the report.

- It can be helpful to create a pre-written database of findings that you can use and modify during a pentest.
	- Many top firms do this to save time. It will make it easier to RAYG and will let your team refine findings over time.

- Keep a checklist as a reminder of what you need to get done in your report.

- You want to include what attacks did not work in a report.
	- That way, the company you're testing knows what you didn't test (what needs further testing) and they know what they're doing well.

- Do not say "includes but is not limited to" or similar. Make sure that your lists, especially when detailing vulns and inventory, are complete. 

### Report Elements

- Include evidence of **all** findings
	- The evidence should make it not only easy to understand, but also hard to misunderstand.
		- The best way to do this is with screenshots.
		- Note that ambiguity is hard to avoid:
			- eg. If you type `whoami` to show root, that doesn't necessarily prove root, as it could only have euid of 0. Type `root; id` to prove that you are root. 
	- Annotate screenshots with numbers, boxes, arrows (use flameshot)
		- Get a standard color used between everyone writing the report. This will make it look more professional.
		- All credentials (yes, even hashes) should be redacted.
		- Try to make sure everything in the screenshot is relevent and everything that is relevent is in the screenshot. 
	- Be specific about every finding.
		- Explain exactly which resources under which permissions are vulnerable to what. 
		- If you know something is true, explain how you know that it is true.
			- eg. instead of saying "this server is old", say "the http response header indicates that the server is old"

- Every finding must have a context behind it.
	- How does this finding relate to the org?


- Every finding needs to have a business impact. Will this fix require a lot of overhead? Will it cost a lot? Explain why a fix is necessary if it is.

- Reports (especially the findings) are generally read by security people. 
	- Explain how problems are found so findings can be recreated. 
	- This is crucial! If an org is trying to remediate the findings on their own, they have to know exactly how to check if the issues were fixed. It will also make a retest easier for you or any other testers in the future. 

- For recommendations, include why they are so and who recommended them (links are preferable). 

### Visual Elements

- Ensure that fonts and colors are consistent. Font size in images should be similar of the font size that is used in the report. 

- Preferably, screenshots will look consistent in terms of size, color, font, etc.

### Tone

- In general, dismissive words like "simply", "small", "quickly" can make someone reading a report feel as if it is unimportant.
	- Reports that are more negative are less likely to get the company rehired to do a retest.
	- People may ignore any advice given when it is given with a tone that suggests the reporter feels superior to the person it is being read by.

- Do not brag. This can make the customer unhappy + prevent them from wanting to rehire you. Your skills should be proven by your report quality. 

### How to Generate Reports

- BHIS suggests using word as, even though it's annoying, it's the best in terms of macros + styles + sections + custom dictionary + spellcheck. 

- With word you can have people work in seperate documents and then `Insert > Object > Text` to insert other word docs into your main report doc.

- You can also use spellcheck as a way to quickly type big block of texts (shorcuts basically).

- Tools like LaTeX can also be used if you want more granular control of your template, but can make reporting a lot slower.
	- Some clients may also specifically request a Word doc.

- Tools like [PlexTrac](https://plextrac.com/) can make reporting, especially when collaborative, much easier, but are very expensive.
	- [pwndoc](https://github.com/pwndoc/pwndoc) is a great open-source alternative that works similarly to generate a word document based on findings. 

## How to Write a Good Report for CPTC

Writing a good report for CPTC should be about the same as writing a general report.

However, Dan Borges (Scoring), has written several blogs on what he believes to be critical in a pentest, which especially motivated teams may want to know to have a slight leg up on the other competition.

Thus, the majority of this section will be based on various posts on [Dan Borges' Blog](http://lockboxx.blogspot.com/)

### Things to Do

- Clear TOC
- Executive Summary
	- Scope
		- Include a network topology below the scope
	- Overall Risk Summary
	- Summary of major Issues
	- Brief Narrative of test
	- High level remediation advice
		- Provide short and long-term advice
	- Successful security controls
		- Optional, but shows the client they're doing some things right
	- Compliance findings and guidance
		- If there is an MOU or SLA, describe if they are met as per the environment. 
	- Methodologies, approaches, risk rating systems
		- Probably makes more sense in the appendix
		- This shows that there are standards being used. PTES is good bc it's standardized
		- Include a diagram of the methodology

- Technical Findings
	- Graphical summaries of findings at the top
		- Pie chart of vulns by criticality and category
	- Include the vuln, the systems vulnerable, the impact on the company, overall risk, detailed steps to test the vuln, suggested remediation, and links that may be useful
		- Risk: low, medium, high, critical, informational
			- Use CVSS
		- Scope: Items and systems impacted. 
			- Can include assets, apps, paths in an app, systems in a process, services...
		- Description: Describe the vuln fully
			- Reference known CVEs and vulns
			- It can be useful to have pre-written vuln descriptions
		- Impact: Impact on the client in this environment specifically
		- Likelihood: Change of an attack
			- Optional
			- Include elements of cvss score, complexity of attack, if there are available tools to make the attack easy
			- This can be part of impact
		- Steps to test: How the reader can verify the vuln
			- Include screenshots and steps to prove the vuln exist and also to make it obvious how to check for the vuln
		- Remediation: How to fix the vuln
			- Provide multiple options to remediate if possible - with tradeoffs explained
		- Additional links: Info about the vuln including CVE, exploit guides, open source code, and walkthroughs from detection and remediation


- Appendix
	- Methodologies
	- Tools used (including permalinks to specific github commit)


- In a retest:
	- Incude a table that shows which vulns have been remediated
	- Even if smth has been remediated, still include remediation details


### Things to do if you don't wanna look bad

- Order should be: Intro -> Executive Summary (incl. Conclusion)

- Make sure finding blocks are easily formatted w/ sections

- Stay away from speculating about a vulnerability. Everything should have evidence

