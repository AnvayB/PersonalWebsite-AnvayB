add:
	git status
	git add .

trials:
	git push origin trials

main:
	git checkout main
	git branch
	git pull
	git checkout trials