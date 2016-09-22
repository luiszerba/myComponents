  var courseTrail = Object.create(HTMLElement.prototype);

  courseTrail.createdCallback = function(){

    var hover = this.getAttribute('hover');
    var logoImgHref = this.getAttribute('logoImgHref');
    var progressAmount = this.getAttribute('progress-amount');
    var progressRemaining = this.getAttribute('progress-remaining');
    var progressTimeText = this.getAttribute('progress-time-text');
    var trailTitle = this.getAttribute('trail-title');
    var moduleDescription = this.getAttribute('module-description');
    var moduleTags = this.getAttribute('module-tags');
    var trailModuleLink = this.getAttribute('trail-module-link');
    var boxColor = this.getAttribute('boxColor');
    var id = this.getAttribute('id');

    var divBox = document.createElement('div');
    divBox.className = 'span4 filter-level-beginner filter-role-admin filter-role-user filter-product-analyticscloud filter-tag-reports';
    divBox.title = hover;
    divBox.style = 'margin-top: 100px; position: relative; left: 0px; top: 0px;';

    var divBoxHeader = document.createElement('div');
    divBoxHeader.className = 'trail-module-item trailhead-item trailhead-item-tile trailhead-item-tile-trail';
    divBoxHeader.id = id;

    var divBoxHeaderColor = document.createElement('div');
    divBoxHeaderColor.className = 'module-header module-padding clearfix';
    divBoxHeaderColor.style = 'background-color:'+boxColor;

    var divBoxHeaderLogoImg = document.createElement('div');
    divBoxHeaderLogoImg.className = 'module-icon pull-left';

    var imgElement = document.createElement ('img');
    imgElement.src = logoImgHref;
    divBoxHeaderLogoImg.appendChild(imgElement);
    divBoxHeaderColor.appendChild(divBoxHeaderLogoImg);

    var divBoxHeaderText = document.createElement('div');
    divBoxHeaderText.className = 'module-bottom text-right';

    var divBoxHeaderTextModuleInfo = document.createElement('div');
    divBoxHeaderTextModuleInfo.className = 'module-info"';
    divBoxHeaderTextModuleInfo.style = 'padding-top: 14px;'

    var divBoxHeaderTextModuleInfoUL = document.createElement('ul');
    divBoxHeaderTextModuleInfoUL.className = 'inline trailhead-progress trailhead-progress-inline';

    var divBoxHeaderTextModuleInfoLI = document.createElement('li');
    var divBoxHeaderTextModuleInfoLISpan = document.createElement('span');
    divBoxHeaderTextModuleInfoLISpan.className = 'progress-amount';
    divBoxHeaderTextModuleInfoLISpan.innerHTML = progressAmount;

    divBoxHeaderTextModuleInfoLI.appendChild(divBoxHeaderTextModuleInfoLISpan);
    divBoxHeaderTextModuleInfoUL.appendChild(divBoxHeaderTextModuleInfoLI);

    var divBoxHeaderTextModuleInfoProgressBar = document.createElement('li');
    divBoxHeaderTextModuleInfoProgressBar.className = 'progress progress-info';
    var divBoxHeaderTextModuleInfoProgressBarDetail = document.createElement('div');
    divBoxHeaderTextModuleInfoProgressBarDetail.className = 'bar';
    divBoxHeaderTextModuleInfoProgressBarDetail.style = 'width:'+progressAmount;

    divBoxHeaderTextModuleInfoProgressBar.appendChild(divBoxHeaderTextModuleInfoProgressBarDetail);
    divBoxHeaderTextModuleInfoUL.appendChild(divBoxHeaderTextModuleInfoProgressBar);

    divBoxHeaderTextModuleInfo.appendChild(divBoxHeaderTextModuleInfoUL);

    var divBoxHeaderTextModuleProgressStatus = document.createElement('div');
    divBoxHeaderTextModuleProgressStatus.className = 'trailhead-progress-completed';
    var iIconComplete = document.createElement('i');
    iIconComplete.className = 'icon-completed';
    var spanProgressTimeText = document.createElement('span');
    spanProgressTimeText.className = 'progress-time-text';
    spanProgressTimeText.innerHTML = progressTimeText;

    iIconComplete.appendChild(spanProgressTimeText);
    divBoxHeaderTextModuleProgressStatus.appendChild(iIconComplete);
    divBoxHeaderTextModuleInfo.appendChild(divBoxHeaderTextModuleProgressStatus);

    var divBoxHeaderTextProgressTimeTextRemaining = document.createElement('div');
    divBoxHeaderTextProgressTimeTextRemaining.className = 'progress-time-text progress-remaining';
    divBoxHeaderTextProgressTimeTextRemaining.innerHTML = progressRemaining;
    divBoxHeaderTextModuleInfo.appendChild(divBoxHeaderTextProgressTimeTextRemaining);

    var divBoxHeaderTextProgressTimeText = document.createElement('div');
    divBoxHeaderTextProgressTimeText.className = 'progress-time-text';
    divBoxHeaderTextProgressTimeText.innerHTML = progressTimeText;

    divBoxHeaderText.appendChild(divBoxHeaderTextModuleInfo);
    divBoxHeaderText.appendChild(divBoxHeaderTextProgressTimeText);

    divBoxHeaderColor.appendChild(divBoxHeaderText);
    divBoxHeader.appendChild(divBoxHeaderColor);

    /** Fim da declaração do header*/

    var divBodyModuleContent = document.createElement('div');
    divBodyModuleContent.className = 'module-content module-padding';
    var linkModuleTrailTitle = document.createElement('a');
    linkModuleTrailTitle.className = 'module-title trail-title';
    linkModuleTrailTitle.href = trailModuleLink;
    linkModuleTrailTitle.innerHTML = trailTitle;
    divBodyModuleContent.appendChild(linkModuleTrailTitle);

    var divBodyModuleDescription = document.createElement('div');
    divBodyModuleDescription.className = 'module-description';
    divBodyModuleDescription.innerHTML = moduleDescription;
    divBodyModuleContent.appendChild(divBodyModuleDescription);

    var divBodyModuleTags = document.createElement('div');
    divBodyModuleTags.className = 'module-tags text-right';
    divBodyModuleTags.innerHTML = moduleTags;
    divBodyModuleContent.appendChild(divBodyModuleTags);

    divBoxHeader.appendChild(divBodyModuleContent);
    divBox.appendChild(divBoxHeader);

    this.appendChild(divBox);

  };

  document.registerElement('course-trail', {prototype: courseTrail});
