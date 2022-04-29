class Api::ItemHistoriesController < ApplicationController
    def index  
        render json: ItemHistory.all
    end
end
