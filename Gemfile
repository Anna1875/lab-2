# Gemfile для Jekyll сайту "Растрова та векторна графіка"

source "https://rubygems.org"

# Jekyll
gem "jekyll", "~> 4.3.0"

# Тема за замовчуванням для GitHub Pages
gem "minima", "~> 2.5"

# GitHub Pages gem (включає всі необхідні плагіни)
gem "github-pages", group: :jekyll_plugins

# Плагіни Jekyll
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
  gem "jekyll-paginate"
  gem "jekyll-redirect-from"
end

# Windows та JRuby не включають zoneinfo файли, тому додаємо tzinfo-data gem
# і асоційований з ним tzinfo-data gem для підтримки часових поясів
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Покращення продуктивності для Windows (включає File.stat для директорій)
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# HTTP для розробки
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]