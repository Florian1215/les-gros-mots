

// CONTACT ======================================================================================

// ==== ADDRESS COPY
const contactButtonCopy = document.getElementById("contact-button-copy");
const popupAddressConfirmation = document.getElementById("popup-address-confirmation");
contactButtonCopy.onclick = function() 
{
	navigator.clipboard.writeText("42 rue des Jeûneurs\n75002 PARIS");
	$(popupAddressConfirmation).animate({
        bottom: "-100px" 
    }, 300); 
	setTimeout(function() {
		$(popupAddressConfirmation).animate({
			bottom: "-400px" 
		}, 300); 
	}, 5000);
	contactButtonCopy.firstElementChild .textContent = "COPIÉ !"
	setTimeout(function() {
		contactButtonCopy.firstElementChild.textContent = "COPY";
	}, 3000);
}


// ==== CONTACTS COPY
var selectedLabelValue = "";
function _contactShowLabel(__line, __label)
{
	contactLine1.firstElementChild.style.backgroundColor  = "#FFFFFF";
	contactLine2.firstElementChild.style.backgroundColor  = "#FFFFFF";
	contactLine3.firstElementChild.style.backgroundColor  = "#FFFFFF";
	contactLine4.firstElementChild.style.backgroundColor  = "#FFFFFF";
	contactLine1.firstElementChild.style.color = "#0e0d0d";
	contactLine2.firstElementChild.style.color = "#0e0d0d";
	contactLine3.firstElementChild.style.color = "#0e0d0d";
	contactLine4.firstElementChild.style.color = "#0e0d0d";
	contactLineLabel1.style.opacity  = "0";
	contactLineLabel2.style.opacity  = "0";
	contactLineLabel3.style.opacity  = "0";
	contactLineLabel4.style.opacity  = "0";
	
	if(__line)
	{		
		__line.firstElementChild.style.backgroundColor = "#001aff";
		__line.firstElementChild.style.color = "#FFFFFF";
	}
	if(__label)
	{
		selectedLabelValue = __label.firstElementChild.textContent;
		__label.style.opacity  = "1";
	}
	
}

const contactFolder1 = document.getElementById("contact-folder1");
const contactFolder2 = document.getElementById("contact-folder2");
const contactFolder3 = document.getElementById("contact-folder3");
const contactFolder4 = document.getElementById("contact-folder4");

contactFolder1.style.visibility = "hidden";
contactFolder2.style.visibility = "hidden";
contactFolder3.style.visibility = "hidden";
contactFolder4.style.visibility = "hidden";

const contactLine1 = document.getElementById("contact-line-1");
const contactLine2 = document.getElementById("contact-line-2");
const contactLine3 = document.getElementById("contact-line-3");
const contactLine4 = document.getElementById("contact-line-4");
const contactLineLabel1 = document.getElementById("contact-line-label-1");
const contactLineLabel2 = document.getElementById("contact-line-label-2");
const contactLineLabel3 = document.getElementById("contact-line-label-3");
const contactLineLabel4 = document.getElementById("contact-line-label-4");
const contactButtonCopy2 = document.getElementById("contact-contact-button-copy");
const popupEmailConfirmation = document.getElementById("popup-email-confirmation");
const popupTelConfirmation = document.getElementById("popup-tel-confirmation");


_contactShowLabel(null, null);
var lineIndex = 0;
contactLine1.addEventListener('mouseenter', () => {
	_contactShowLabel(contactLine1, contactLineLabel1);
	contactFolder1.style.visibility = "visible";
	contactFolder2.style.visibility = "hidden";
	contactFolder3.style.visibility = "hidden";
	contactFolder4.style.visibility = "hidden";
	lineIndex = 0;
});
contactLine1.dispatchEvent(new MouseEvent('mouseenter'));

contactLine2.addEventListener('mouseenter', () => {
	_contactShowLabel(contactLine2, contactLineLabel2);
	contactFolder1.style.visibility = "hidden";
	contactFolder2.style.visibility = "visible";
	contactFolder3.style.visibility = "hidden";
	contactFolder4.style.visibility = "hidden";
	lineIndex = 1;
});
contactLine3.addEventListener('mouseenter', () => {
	_contactShowLabel(contactLine3, contactLineLabel3);
	contactFolder1.style.visibility = "hidden";
	contactFolder2.style.visibility = "hidden";
	contactFolder3.style.visibility = "visible";
	contactFolder4.style.visibility = "hidden";
	lineIndex = 2;
});
contactLine4.addEventListener('mouseenter', () => {
	_contactShowLabel(contactLine4, contactLineLabel4);
	contactFolder1.style.visibility = "hidden";
	contactFolder2.style.visibility = "hidden";
	contactFolder3.style.visibility = "hidden";
	contactFolder4.style.visibility = "visible";
	lineIndex = 3;
});
contactButtonCopy2.addEventListener('click', () => {
	if(selectedLabelValue != "")
	{
		var popupOk = lineIndex == 3 ? popupTelConfirmation : popupEmailConfirmation;
		navigator.clipboard.writeText(selectedLabelValue);
		$(popupOk).animate({
			bottom: "-100px" 
		}, 300); 
		setTimeout(function() {
			$(popupOk).animate({
				bottom: "-400px" 
			}, 300); 
		}, 5000);
		contactButtonCopy2.children[0].textContent = "COPIÉ !"
		setTimeout(function() {
			contactButtonCopy2.children[0].textContent = "COPY";
		}, 3000);
	}
});
	


// ==== CONTACT body preview GIF
const contactBodyPreview = document.getElementById("contact-email-preview");
const contactBodyTextarea = document.getElementById("contact-email-middle-body");
contactBodyTextarea.style.resize = "none";
contactBodyTextarea.addEventListener('click', () => 
{
	contactBodyPreview.style.visibility = "hidden";
	
});


// ==== BUTTON COPY MAIL
const contactButtonCopyMail = document.getElementById("contact-email-button-copymail");
contactButtonCopyMail.addEventListener('click', () => 
{
	navigator.clipboard.writeText("contact@lesgrosmots.com");
	$(popupEmailConfirmation).animate({
		bottom: "-100px" 
	}, 300); 
	setTimeout(function() {
		$(popupEmailConfirmation).animate({
			bottom: "-400px" 
		}, 300); 
	}, 5000);
});

