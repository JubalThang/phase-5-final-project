
# important! fallback controller not inheritant from ApplicationController. ApplicationController doen't know how to render html  

class FallbackController < ActionController::Base
    def index 
        rend file: "public/index.html"
        # actual the index file isn't there in public folder yet
    end
end
