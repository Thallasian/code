When making adding, removing, renaming or changing the contents of files in the git repository. We must add any changes to be staged for a commit.

Doing this means, selecting changes to be written into history.


```
max@a-workstation ~/r/h/docs> git add git.md
max@a-workstation ~/r/h/docs> git status
On branch feat/git
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   git.md


max@a-workstation ~/r/h/docs> git commit -m "feat: example of creating a new git repository" 
[feat/git 957f80a] feat: example of creating a new git repository
 1 file changed, 34 insertions(+)
 create mode 100644 docs/git.md
max@a-workstation ~/r/h/docs> git push

```

The above is an example of committing the previous file (repository.md).

Breaking it down we see. 

git add <filename> - stages a file and its changes for commit.

git status - Running status will show us the current state of the repo. Files staged, added, removed.. good for knowing what you are doing.

git commit -m "message" - Writes the staged files (yes, there can be multiple files and changes for each commit) to history. Logging the author name, time/date and all changes. The message that you write here is very important. It is used to communicate the changes made with any collaborators.

git push - This command will **push** all made commits to the *upstream* (aka the shared repository on github). This is how you get your commits to your team.

You might have realised by now that the commit is the unit we are working with in git. When we write code, when we work together. To reason about changes we are making. Developers will read the commits made to see if they fit the goal.

The commits can be read like a book, a lot of weight is put into trying to convey meaning to the team through them. 
