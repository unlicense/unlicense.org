#!/usr/bin/env ruby
require 'rubygems'
require 'rake'

task :default => [:build]

task :open => :build do
  sh "open .html/index.html"
end

task :build do
  #sh "markdoc build"
end

task :clean do
  #sh "markdoc clean-html && markdoc clean-temp"
end

task :serve do
  #sh "markdoc serve"
end

task :upload => :build do
  current_branch = `git branch 2>/dev/null | awk '/^\* /{print $2}'`.strip
  ["git checkout gh-pages",
   "rsync -rv .html/.* .",
   "git add .",
   "[[ -z `git status --porcelain` ]] || (git commit -m 'P U B L I S H' ; git push -f)",
   "git checkout #{current_branch}"].all? do |cmd|
                                     # We use all? so that we'll abort if anything fails.
     sh cmd, verbose: true
   end
end
