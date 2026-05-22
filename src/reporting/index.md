# Reporting

Before and after deciding what to include in your report, it is worth reviewing [these](https://github.com/juliocesarfort/public-pentesting-reports) public reports for inspiration on formatting and findings.

## How to Write a Good Report

This section covers general reporting tips for writing an outstanding report.

The majority of this section is based on the [BHIS Pentest Reporting course by BB King](https://www.youtube.com/watch?v=rM-MVSe4MiA&ab_channel=BlackHillsInformationSecurity), also available as a [pay-what-you-can course from Antisyphon Training](https://www.antisyphontraining.com/pay-what-you-can/).



### General Tips

- Reporting should be done alongside the testing
	- **RAYG: Report as you go.**
	- This helps ensure completeness and prevents details from being forgotten.

- It can be helpful to create a pre-written database of findings that you can use and modify during a pentest.
	- Many top firms do this to save time. It will make it easier to RAYG and will let your team refine findings over time.

- Keep a checklist as a reminder of what you need to get done in your report.

- Include attacks that did not succeed in the report.
	- This lets the company know what was not tested (and may need further testing) as well as where their defenses are effective.

- Do not say "includes but is not limited to" or similar. Make sure that your lists, especially when detailing vulns and inventory, are complete. 

- Report should indicate that it is confidential (or whatever other labeling term the company uses)

### Report Elements

- Include evidence of **all** findings
	- The evidence should be easy to understand and difficult to misinterpret.
		- The best way to do this is with screenshots.
		- Note that ambiguity can be difficult to avoid:
			- e.g., running `whoami` to demonstrate root access does not necessarily prove full root privileges, as the process may only have an euid of 0. Running `root; id` provides stronger evidence.
	- Annotate screenshots with numbers, boxes, and arrows (tools like Flameshot work well).
		- Standardize annotation colors across all report contributors for a consistent, professional appearance.
		- All credentials (yes, even hashes) should be redacted.
		- Try to make sure everything in the screenshot is relevant and everything that is relevant is in the screenshot. 
	- Be specific about every finding.
		- Explain exactly which resources, under which permissions, are vulnerable and to what.
		- If you assert something is true, explain how you verified it.
			- e.g., instead of "this server is old," write "the HTTP response header indicates that the server is running an outdated version."

- Every finding must have a context behind it.
	- How does this finding relate to the org?


- Every finding needs to have a business impact. Will this fix require a lot of overhead? Will it cost a lot? Explain why a fix is necessary if it is.

- Reports (especially the findings) are typically read by security professionals.
	- Explain how problems were identified so that findings can be reproduced.
	- This is essential. If an organization is attempting to remediate findings independently, they need to know exactly how to verify whether the issues have been resolved. It also simplifies any future retests.

- For recommendations, include the rationale and cite who recommended them (links are preferable).

### Visual Elements

- Ensure that fonts and colors are consistent. Font size in images should be similar of the font size that is used in the report. 

- Preferably, screenshots will look consistent in terms of size, color, font, etc.

### Tone

- Dismissive words like "simply," "small," or "quickly" can make the reader feel the issue is unimportant.
	- Reports with an overly negative tone are less likely to result in the firm being rehired for a retest.
	- Readers may disregard advice delivered with a tone that suggests the author feels superior.

- Do not brag. This can make the client uncomfortable and reduce the likelihood of being rehired. Let the report quality speak for itself.

### How to Generate Reports

- BHIS recommends using Microsoft Word. Despite its drawbacks, it offers the best support for macros, styles, sections, custom dictionaries, and spellcheck.

- With Word, multiple authors can work in separate documents and then use `Insert > Object > Text` to merge them into the main report.

- Word's autocorrect can also be configured to expand shorthand into full text blocks, speeding up report writing.

- Tools like LaTeX can also be used if you want more granular control of your template, but can make reporting a lot slower.
	- Some clients may also specifically request a Word doc.

- Tools like [PlexTrac](https://plextrac.com/) can make reporting, especially when collaborative, much easier, but are very expensive.
	- [pwndoc](https://github.com/pwndoc/pwndoc) is a strong open-source alternative that generates Word documents from findings.
	- [Ghostwriter](https://github.com/GhostManager/Ghostwriter) by SpecterOps is another well-regarded open-source option.
	- [SysReporter](https://github.com/Syslifters/sysreptor)

## How to Write a Good Report for CPTC

Writing a good report for CPTC should be about the same as writing a general report.

However, Dan Borges (Scoring) has written several blog posts on what he considers critical in a pentest report. Motivated teams may find these useful for gaining an edge over the competition.

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
		- This demonstrates that the engagement follows established standards. PTES is a good choice as it is well-standardized.
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
		- Likelihood: Chance of an attack
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
	- Include a table that shows which vulns have been remediated
	- Even if something has been remediated, still include the remediation details


### Common Mistakes to Avoid

- Order should be: Intro -> Executive Summary (including Conclusion)

- Ensure finding blocks are clearly formatted with distinct sections

- Avoid speculating about a vulnerability. Every claim should be backed by evidence.

