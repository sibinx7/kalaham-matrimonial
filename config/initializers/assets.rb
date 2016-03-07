# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
Rails.application.config.assets.precompile += %w( admin.js )
Rails.application.config.assets.precompile += %w( admin.css )
Rails.application.config.assets.precompile += %w( polymer/polymer.html )
Rails.application.config.assets.precompile += %w( elements/header-bar.html )
Rails.application.config.assets.precompile += %w( iron-form/iron-form.html )
Rails.application.config.assets.precompile += %w( paper-input/paper-input.html )
Rails.application.config.assets.precompile += [ 'iron-*/*' ]
Rails.application.config.assets.precompile += [ 'paper-*/*' ]