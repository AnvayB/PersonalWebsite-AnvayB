add:
	git status
	git add .

# git commit -m "message"

trials:
	git push origin trials

main:
	git checkout main
	git branch
	git pull
	git checkout trials