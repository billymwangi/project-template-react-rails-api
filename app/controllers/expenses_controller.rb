class ExpensesController < ApplicationController
   
    
    
    # GET /expenses
    def index
        render json: Expense.all, status: :ok
    end

     # GET /expense/{id}
     def show
        expense = Expense.find_by(id:params[:id])
        if expense
            render json: expense, status: :ok
        else 
            render json: {error: "Expense not found"}, status: :not_found
        end
    end

    # POST /expense
    def create
        expense = Expense.create(expense_params)
        if expense.valid?
            render json: expense, status: :created
        else
            render json: { errors: expense.errors.full_messages },
                   status: :unprocessable_entity
        end
    end

    # PUT/PATCH /tasks/{id}
    def update
        expense = Expense.find_by(id:params[:id])

        if expense
            expense.update(expense_params)
            render json: task, status: :accepted
        else
            render json: {error: "Expense not found"}, status: :not_found
        end
    end

    # DELETE /tasks/{id}
    def destroy
        expense = Expense.find_by(id:params[:id])

        if expense
            expense.destroy
            head :no_content
        else
            render json: { error: "Expense not found" }, status: :not_found
        end
    end


    private

    def expense_params
        params.permit(
            :name, :cost, :user_id
        )
    end
end
