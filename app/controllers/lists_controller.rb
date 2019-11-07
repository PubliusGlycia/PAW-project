class ListsController < ApplicationController
    def create
        list = List.create(list_params)
        respond_to do |format|
            format.json do
                render json: list
            end
        end
    end

    private

    def list_params
        params.require(:list).permit(:title, :board_id)
    end
end
