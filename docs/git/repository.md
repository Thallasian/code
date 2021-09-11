Git is a tool for *version control*. It is also the main tool for collaboration.
It is how, we as software developers share work with each other.

Git always starts with a repository (assuming you have it installed).
The command to make new repository is `git init`. This command is to be run from a terminal, preferably from a new folder/directory.
After running `init`. Git will create a new directory called .git inside the working directory.

The dot in the directory name signals that this is a hidden folder. Files and folder name .{anything} will appear as hidden items. Atleast in the unix world.

Example of making a new repository:

```
max@a-workstation ~> mkdir new-repo
max@a-workstation ~> cd new-repo

max@a-workstation ~/new-repo> git init
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint:
hint: 	git config --global init.defaultBranch <name>
hint:
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint:
hint: 	git branch -m <name>
Initialized empty Git repository in /home/max/new-repo/.git/
max@a-workstation ~/new-repo> ls -a
.git
max@a-workstation ~/new-repo> ls -a .git
branches  hooks  info  objects  refs  config  description  HEAD
```

A repository is used to save all the files that we want to share with our codevelopers. So it is where the project lives.

Something to consider here is the code living in the repository on github is not *the same* as the one you have cloned to your local computer.

So if there are three developers in a team and they are using github for their *upstream* repository there will be 4 repositories running in parallell.
