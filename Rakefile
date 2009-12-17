#!/usr/bin/env ruby
require 'rubygems'
require 'rake'

task :default => [:build]

task :build do
  sh "markdoc build"
end

task :clean do
  sh "markdoc clean-html && markdoc clean-temp"
end

task :serve do
  sh "markdoc serve"
end
