#Y Combinator's Hacker News CLI
A command line tool to print out the latest stories on [Hacker News](https://news.ycombinator.com/) to your terminal.

##Features

- View top, newest, show, ask, and job posts from Hacker News.
- Uses the official [Firebase-based Hacker News API](https://github.com/HackerNews/API).

##Installation

```
$ npm install --global hns
```

##Usage Examples
Typing `hns --help` will list all the available commands. You can type `hns --help TASK` to get help for a specific command.

####Get the latest top 3 posts

```
$ hns top -n 3
```

![](https://github.com/gmontalvoriv/hns/blob/master/screenshots/top.png)

####Get the 3 most recent jobs

```
$ hns jobs -n 3
```

![](https://github.com/gmontalvoriv/hns/blob/master/screenshots/job.png)

**Notes**: 
- Use `-n` to limit the number of posts displayed.
- `cmd + double-click` to open links from the terminal on Mac OSX.

## TODO

- Interactive mode (Users can navigate posts using the arrow keys and open them from the terminal)

##Contributing
Feel free to help out with this project. If you see something that could be made better or want a new feature, open up an issue or send a Pull Request.
##License
[MIT](https://github.com/gmontalvoriv/hns/blob/master/LICENSE)
