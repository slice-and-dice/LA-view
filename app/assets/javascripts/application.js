/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Details/summary polyfill from frontend toolkit
  GOVUK.details.init()

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
})


function switchOperatorType(operator) {
  var button = document.getElementById("operator-continue-button");
  button.setAttribute("href", operator);
}

//Add contact details
    $(document).on('click', '.button-add-another-vertical', function (e) {
      e.preventDefault();
      var beforeThis = $(this).parents('.list-item-wrapper-vertical').find('.grid-row').last();
      $(beforeThis).before(
					 '<div class="form-group">'+

						'<label class="form-label" for="contact-3">Contact type</label>'+
						'<div class="form-group-small contact-type-select">'+
								'<select class="form-control form-title-input" name="contact-3" id="contact-3">'+
										'<option value="-- select one --"></option>'+
										'<option value="1">Home telephone</option>'+
										'<option value="2">Mobile telephone</option>'+
										'<option value="3">Work telephone</option>'+
										'<option value="4">Work mobile telephone</option>'+
										'<option value="5">Home email</option>'+
										'<option value="6">Work email</option>'+
										'<option value="7">Text phone</option>'+
										'<option value="8">TypeTalk</option>'+
								'</select>'+
						'</div>'+
								'<input class="form-control" name="contact-type" id="contact-type" type="numerical">'+
            '</div>'
      );


      sortFieldsVertical();
    });

    function sortFieldsVertical() {
      var listCounter = 1;
      var inputCounter = 1;

      $(document).find('.list-item-wrapper-vertical .grid-row').each(function () {
        $(this).find('h2').text('Item ' + listCounter);

        if ($(this).find('.remove-list-item-vertical').length === 0) {
          $(this).find('.column-one-third:last').append('<a id="remove-item-vertical-' + listCounter + '" class="remove-list-item-vertical" href="#">Remove this</a>');
        } else {
          $(this).find('.remove-list-item-vertical').attr('id', 'remove-item-vertical-' + listCounter);
        }

        $(this).find('label').each(function () {
          $(this).attr('for', 'field-' + inputCounter);
          inputCounter++;
        });

        $(this).find('input').each(function () {
          var labelNo = $(this).parent().find('label').attr('for').split('-').pop();
          $(this).attr('id', 'field-' + labelNo);
          $(this).attr('name', 'field-' + labelNo);
        });

        listCounter++;
      });

      if ($(document).find('.list-item-wrapper-vertical .grid-row').length === 2) {
        $('.remove-list-item-vertical').remove();
      }
    }

    $(document).on('click', '.remove-list-item-vertical', function (e) {
      e.preventDefault();
      $(this).parents('.grid-row').prev('hr').remove();
      $(this).parents('.grid-row').remove();
      sortFieldsVertical();
    });
