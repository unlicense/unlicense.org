#!/usr/bin/env ruby
require 'rubygems'
require 'rake'

task :default => [:build]

task :open => :build do
  sh "open .html/index.html"
end

task :build do
  sh "markdoc build"
end

task :clean do
  sh "markdoc clean-html && markdoc clean-temp"
end

task :serve do
  sh "markdoc serve"
end

task :upload => :build do
  current_branch = `git branch 2>/dev/null | awk '/^\* /{print $2}'`
  sh "git checkout gh-pages"
  sh "cp -R .html/.* ."
  sh "git add ."
  sh "git commit -m 'P U B L I S H'"
  sh "git checkout #{current_branch}"
end
