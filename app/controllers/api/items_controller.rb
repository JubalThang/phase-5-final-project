class Api::ItemsController < ApplicationController
    def index
        render json: Item.all 
    end

    def destroy
        item = find_item
        # if current_user.admin
        #     item.destroy
        #     header :no_content
        # else  
        #     render json: {message: "You have no permission to delete this item"}, status: :unauthorized
        # end 
       check_auth
       item.destroy
    end

    def create
        department = Department.find_by(params[:department_id])
        item = department.items.create!(item_params)
        render json: item, status: :created
    end

    private 

    def find_item 
        Item.find(params[:id])
    end 

    def item_params
        params.require(:item).permit(:model_no, :sn, :image_url, :department_id, item_history_attributes: [ :dop, :price, :receive_image ])
    end
end
