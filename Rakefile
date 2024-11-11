task default: %w(build)

task open: %w(build) do
  sh "open .vitepress/dist/index.html"
end

task :build do
  sh "npx vitepress build"
end

task :clean do
  sh "rm -Rf .vitepress/dist"
end

task :serve do
  sh "npx vitepress dev"
end

task upload: %w(build) do
  current_branch = `git branch 2>/dev/null | awk '/^\* /{print $2}'`.strip
  ["git checkout gh-pages",
   "rsync -rv .vitepress/dist/.* .",
   "git add .",
   "[[ -z `git status --porcelain` ]] || (git commit -m 'P U B L I S H' ; git push -f)",
   "git checkout #{current_branch}"].all? do |cmd|
                                     # We use all? so that we'll abort if anything fails.
     sh cmd, verbose: true
   end
end
