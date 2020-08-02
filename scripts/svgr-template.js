function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const typeScriptTpl = template.smart({ plugins: ['jsx','typescript'] });
  return typeScriptTpl.ast`
    import * as React from 'react';
    import { IEmojiProps } from '../../styled';
    const ${componentName} = (props: IEmojiProps) => ${jsx};
    export default ${componentName};
  `;
}
module.exports = template;
