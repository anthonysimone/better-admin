/**
 * @file
 * Custom multiselects with Select2
 */

!function ($) {
  // Always use strict mode to enable better error handling in modern browsers.
  "use strict";

  Drupal.behaviors.adminFieldSelect = {
    attach: function (context) {

      /**
       * Select2
       */
      $("#edit-fields-add-existing-field-field-name").select2({
        placeholder: "- Select an existing field -",
        width: "100%"
      });

    }
  }

}(jQuery);