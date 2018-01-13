/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as dom from '../dom.js';
import * as util from '../util.js';

(() => {
  const initializers = {
    button() {
      dom.getAll('.mdc-button').forEach((button) => {
        mdc.ripple.MDCRipple.attachTo(button);
      });
    },

    checkbox() {
      document.querySelector('#indeterminate-checkbox').indeterminate = true;

      document.querySelector('#checkbox-toggle--indeterminate').addEventListener('click', () => {
        const checkboxes = dom.getAll('.demo-checkbox-wrapper .mdc-checkbox__native-control');
        checkboxes.forEach(function(checkbox) {
          checkbox.indeterminate = !checkbox.indeterminate;
        });
      });

      document.querySelector('#checkbox-toggle--align-end').addEventListener('click', () => {
        const formFields = dom.getAll('.demo-checkbox-wrapper.mdc-form-field');
        formFields.forEach(function(formField) {
          formField.classList.toggle('mdc-form-field--align-end');
        });
      });
    },

    drawer() {
      const drawerEl = document.querySelector('.mdc-drawer--temporary');
      const drawer = new mdc.drawer.MDCTemporaryDrawer(drawerEl);

      dom.getAll('.demo-drawer-toggle').forEach((toggleElem) => {
        toggleElem.addEventListener('click', () => {
          drawer.open = true;
        });
      });

      drawerEl.addEventListener('MDCTemporaryDrawer:open', () => {
        console.log('Received MDCTemporaryDrawer:open');
      });

      drawerEl.addEventListener('MDCTemporaryDrawer:close', () => {
        console.log('Received MDCTemporaryDrawer:close');
      });
    },

    fab() {
      dom.getAll('.mdc-fab').forEach((fab) => {
        mdc.ripple.MDCRipple.attachTo(fab);
      });
    },

    iconToggle() {
      dom.getAll('.mdc-icon-toggle').forEach((iconToggleEl) => {
        mdc.iconToggle.MDCIconToggle.attachTo(iconToggleEl);
      });
    },

    linearProgress() {
      dom.getAll('.mdc-linear-progress').forEach((progressEl) => {
        const linearProgress = mdc.linearProgress.MDCLinearProgress.attachTo(progressEl);
        linearProgress.progress = 0.5;
        if (progressEl.dataset.buffer) {
          linearProgress.buffer = 0.75;
        }
      });
    },

    ripple() {
      dom.getAll('.mdc-ripple-surface').forEach((surface) => {
        mdc.ripple.MDCRipple.attachTo(surface);
      });
    },

    select() {
      dom.getAll('.mdc-select:not(select)').forEach((select) => {
        mdc.select.MDCSelect.attachTo(select);
      });
    },

    slider() {
      dom.getAll('.mdc-slider').forEach((slider) => {
        mdc.slider.MDCSlider.attachTo(slider);
      });
    },

    tab() {
      dom.getAll('.mdc-tab-bar').forEach((tabBar) => {
        mdc.tabs.MDCTabBar.attachTo(tabBar);
      });
    },

    textfield() {
      dom.getAll('.mdc-text-field').forEach((textField) => {
        mdc.textField.MDCTextField.attachTo(textField);
      });
    },

    radio() {
      dom.getAll('.mdc-form-field.demo-radio-form-field').forEach((formField) => {
        const formFieldInstance = new mdc.formField.MDCFormField(formField);
        const radio = formField.querySelector('.mdc-radio');
        if (radio) {
          formFieldInstance.input = new mdc.radio.MDCRadio(radio);
        }
      });
    },
  };

  demoReady(() => {
    util.objectForEach(initializers, (initializer) => initializer());
  });
})();
