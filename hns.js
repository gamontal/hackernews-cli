#!/usr/bin/env node

'use strict';
var hn = require('node-hn');
var cmd = require('commander');
var pkg = require("./package.json");

cmd
  .usage('<command> [-l LIMIT]')
  .version(pkg.version)
  .option("-l, --limit [number]", "limit the number of posts to be displayed", /^[0-9]+$/)

cmd
  .command('top')
  .description('Top stories')
  .action(function () { hn.topstories(cmd.limit); });

cmd
  .command('new')
  .description('New stories')
  .action(function () { hn.newstories(cmd.limit); });

cmd
  .command('show')
  .description('Show HN stories')
  .action(function () { hn.showstories(cmd.limit); });

cmd
  .command('ask')
  .description('Ask HN stories')
  .action(function () { hn.askstories(cmd.limit); });

cmd
  .command('jobs')
  .description('Job stories')
  .action(function () { hn.jobstories(cmd.limit); });

cmd.parse(process.argv);
