sap.ui.define([], function () {
	"use strict";

	return {

		toLowerCase: function (email) {
            return email.toLowerCase()+'@test.com';
		},

        formatTitle: function (sFirstName, sLastName) {
            return sFirstName.toUpperCase() + " " + sLastName.toUpperCase();
        },
	};
});