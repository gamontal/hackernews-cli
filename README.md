#Y Combinator's Hacker News CLI 
[![npm version](https://img.shields.io/npm/v/hns.svg?style=flat)](https://www.npmjs.com/package/hns) 
[![npm](https://img.shields.io/npm/l/express.svg)](http://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dt/hns.svg?style=flat)](https://www.npmjs.com/package/hns)

A command line tool to print out the latest stories on [Hacker News](https://news.ycombinator.com/) to your terminal.

##Features

- View top, newest, show, ask, and job posts from Hacker News.
- Uses the official [Firebase-based Hacker News API](https://github.com/HackerNews/API).

##Installation

```
$ npm install --global hns
```

##Usage Examples
Typing `hns --help` will list all the available commands.

####Get the latest top 5 posts

```
$ hns top -l 5
```

![](https://github.com/gmontalvoriv/hns/blob/master/screenshots/top.png)

####Get the 5 most recent jobs

```
$ hns jobs -l 5
```

![](https://github.com/gmontalvoriv/hns/blob/master/screenshots/job.png)

**Notes**: 
- Use `-l` to limit the number of posts displayed.
- Press `Command(⌘) + double-click` to open links from the terminal on Mac OS X.

## TODO

- Interactive mode (Users can navigate posts using the arrow keys and open them from the terminal)

##Contributing
Feel free to help out with this project. If you see something that could be made better or want a new feature, open up an issue or send a Pull Request.
##License
[MIT](https://github.com/gmontalvoriv/hns/blob/master/LICENSE)
