//The purpose of the mediator is to control the workflow between objects and we really don’t need 
//anything more than an object literal to do this.

var orgChart = {
 
  addNewEmployee: function(){
 
    // getEmployeeDetail provides a view that users interact with
    var employeeDetail = this.getEmployeeDetail();
 
    // when the employee detail is complete, the mediator (the 'orgchart' object)
    // decides what should happen next
    employeeDetail.on("complete", function(employee){
 
      // set up additional objects that have additional events, which are used
      // by the mediator to do additional things
      var managerSelector = this.selectManager(employee);
      managerSelector.on("save", function(employee){
        employee.save();
      });
 
    });
  },
 
  // ...
}