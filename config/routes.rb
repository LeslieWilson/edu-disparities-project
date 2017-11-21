Rails.application.routes.draw do

  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/forums')
  get 'signout', to: 'sessions#destroy', as: 'signout'

  root "pages#index"



  namespace :api do
    namespace :v1 do
      resources :forums
    end
  end

  get '*path', to: 'pages#index'
end
