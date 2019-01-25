import { Template } from 'meteor/templating';
import { Tasks } from "../api/tasks.js";
 
import './body.html';
 
Template.body.helpers({
  tasks() {
      return Tasks.find({}, { sort: { createdAt: -1 } });
  },
});

Template.body.events({
    "submit .new-task" (event) {
        event.preventDefault();

        // Get value from form element
        const target = event.target;
        const text = target.text.value;

        // insert new task into the colletion
        Tasks.insert({
            text,
            createdAt: new Date(),
        });

        // clear the form
        target.text.value = "";
    },
});