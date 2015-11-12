#!/usr/bin/env node

'use strict';
var hn = require('node-hn');
var cmd = require('commander');
var pkg = require("./package.json");

var post_limit;
cmd
  .usage('<command> [option]')
  .version(pkg.version)

cmd
  .command('top')
  .description('List Top stories')
  .option("-l, --limit [number]", "Limit query results", /^[0-9]+$/)
  .action(function (op) {
          post_limit = op.limit;
          hn.topstories(post_limit);
  });

cmd
  .command('new')
  .description('List New stories')
  .option("-l, --limit [number]", "Limit query results", /^[0-9]+$/)
  .action(function (op) {
          post_limit = op.limit;
          hn.newstories(post_limit);
  });

cmd
  .command('show')
  .description('List Show HN stories')
  .option("-l, --limit [number]", "Limit query results", /^[0-9]+$/)
  .action(function (op) {
          post_limit = op.limit;
          hn.showstories(post_limit);
  });

cmd
  .command('ask')
  .description('List Ask HN stories')
  .option("-l, --limit [number]", "Limit query results", /^[0-9]+$/)
  .action(function (op) {
          post_limit = op.limit;
          hn.askstories(post_limit);
  });

cmd
  .command('jobs')
  .description('List Job stories')
  .option("-l, --limit [number]", "Limit query results", /^[0-9]+$/)
  .action(function (op) {
          post_limit = op.limit;
          hn.jobstories(post_limit);
  });


cmd.parse(process.argv);
