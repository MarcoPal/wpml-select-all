document.addEventListener('DOMContentLoaded', function () {
  const $wpmlContainer = document.getElementById('icl_div_config');
  if (!$wpmlContainer) return;
  const $tables = $wpmlContainer.querySelectorAll('.widefat');
  $tables.forEach($table => new SelectAllOptions($table));
});

function SelectAllOptions ($table) {
  const $optionRows = $table.querySelectorAll('tbody tr');
  if (!$optionRows.length) return;
  const $optionsWrapper = createOptions($optionRows[0]);
  insertAfter($optionsWrapper, $table);
  const $buttons = $optionsWrapper.querySelectorAll('button');
  $buttons.forEach($button => {
    $button.addEventListener('click', () => selectAll($optionRows, $button.textContent))
  });
}

function selectAll ($optionRows, option) {
  $optionRows.forEach($optionRow => {
    const $inputs = $optionRow.querySelectorAll('input[name]:not(:disabled)');
    $inputs.forEach($input => checkInput($input, option))
  });
}

function checkInput ($input, option) {
  const label = $input.closest('label').textContent;
  if (label !== option) return;
  $input.checked = true;
}

function insertAfter (newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function createOptions ($optionRow) {
  const $inputs = $optionRow.querySelectorAll('input[name]');

  const $buttons = [...$inputs]
    .map($input => {
      const label = $input.closest('label').textContent;
      return `<button class="button" type="button">${label}</button>`;
    })
    .join('');

  const $wrapper = document.createElement('div');

  const style = `  
    border: 1px solid #e5e5e5;
    border-top: 0; 
    background-color: #fafafa;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  $wrapper.innerHTML = `
    <div style="${style}">
      <div>Select all</div>
      <div>${$buttons}</div>
    </div>
  `;

  return $wrapper;
}