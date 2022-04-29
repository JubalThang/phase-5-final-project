class Api::DepartmentsController < ApplicationController

    def index 
        render json: Department.all
    end

    def show 
        find_department
        render json: @department, status: :ok
    end
    
    def create 
        # new department will create under user's church
        department = current_user.church.departments.create!(department_params)
        render json: department, status: :created
    end

    private 

    def find_department
        @department = Department.find(params[:id])
    end


    def department_params 
        params.require(:department).permit(:name)
    end
end
