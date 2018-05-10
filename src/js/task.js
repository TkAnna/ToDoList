'use strict';

function Task(tContent, tStatus, tPriority) {
    // this.groupTitle = gTitle;
    this.content = tContent;
    this.status = tStatus;
    this.priority = tPriority;

    this.getTask = (parent) => {
        $('<li/>', {
            class: 'list-group-item d-flex justify-content-between align-items-center',
            // html: '<div>' + this.content + '</div>' +
            // '<div><button class="btn btn-outline-success mr-2" type="button"><i class="fas fa-edit"></i></button>' +
            // '<button class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button></div>'

            html: `<div>${this.content}</div><div>
                   <button class="btn btn-outline-success mr-2 editTaskBtn" type="button"><i class="fas fa-edit"></i></button>
                   <button class="btn btn-outline-danger deleteTaskBtn"><i class="fas fa-trash-alt"></i></button></div>`

        }).appendTo(parent);
    }
}
