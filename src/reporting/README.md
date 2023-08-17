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


