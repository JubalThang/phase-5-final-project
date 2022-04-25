# Church Inventory Management System #
## Models ## 
### User ### 
*Attributes*
- email (validates :email,  presence: true, uniqueness: true ,length: { maximum: 50 } 
- password 
- uuid 
- admin (initial signup has true, handle from frontend, the rest default false unless admin changed it to true after created)

*Macros*
- has_one :church
- accepts_nested_attributes_for :church
- has_many :assigned_items, class_name: "Item"

### Church ### 
*Attributes*
- name 
- address (for future features)

*Macros*
- belongs_to :user
- has_many :departments
- has_many :items, through :departments

### Department ### 
*Attributes*
- name
- manager (for future features)

*Marcos*
- belongs_to :church
- has_many :items

### Item ### 
*Attributes*
- model_no
- sn (present, unique if same model_no)
- img
- user_id (assigned_user)
- department_id 

*Macros*
- belongs_to :department
- belongs_to :user
- has_one :item_history

### Item_history ### 
*Attributes*
- price 
- dop (date of purchase)
- receive_img (optional img link)

*Macros*
- belongs_to :item

## Functions ##
- Must create an account to access the website
- Only admin can create/edit/delete department and items  