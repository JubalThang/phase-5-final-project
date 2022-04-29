class Api::ItemsController < ApplicationController
    def index
        render json: Item.all 
    end

    def create
        department = Department.find_by(params[:department_id])
        item = department.items.create!(item_params)
        render json: item, status: :created
    end

    private 
    def item_params
        params.require(:item).permit(:model_no, :sn, :image_url, :department_id, item_history_attributes: [ :dop, :price, :receive_image ])
    end
end
