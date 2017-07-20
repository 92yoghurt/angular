/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js

import {Plural} from '@angular/common';

export default [
  'ast', [['a', 'p'], ['AM', 'PM'], ['de la mañana', 'de la tarde']],
  [['a', 'p'], ['AM', 'PM'], ['mañana', 'tarde']],
  [
    ['D', 'L', 'M', 'M', 'X', 'V', 'S'], ['dom', 'llu', 'mar', 'mié', 'xue', 'vie', 'sáb'],
    ['domingu', 'llunes', 'martes', 'miércoles', 'xueves', 'vienres', 'sábadu'],
    ['do', 'll', 'ma', 'mi', 'xu', 'vi', 'sá']
  ],
  ,
  [
    ['X', 'F', 'M', 'A', 'M', 'X', 'X', 'A', 'S', 'O', 'P', 'A'],
    ['xin', 'feb', 'mar', 'abr', 'may', 'xun', 'xnt', 'ago', 'set', 'och', 'pay', 'avi'],
    [
      'de xineru', 'de febreru', 'de marzu', 'd’abril', 'de mayu', 'de xunu', 'de xunetu',
      'd’agostu', 'de setiembre', 'd’ochobre', 'de payares', 'd’avientu'
    ]
  ],
  [
    ['X', 'F', 'M', 'A', 'M', 'X', 'X', 'A', 'S', 'O', 'P', 'A'],
    ['Xin', 'Feb', 'Mar', 'Abr', 'May', 'Xun', 'Xnt', 'Ago', 'Set', 'Och', 'Pay', 'Avi'],
    [
      'xineru', 'febreru', 'marzu', 'abril', 'mayu', 'xunu', 'xunetu', 'agostu', 'setiembre',
      'ochobre', 'payares', 'avientu'
    ]
  ],
  [['e.C.', 'd.C.'], , ['enantes de Cristu', 'después de Cristu']], 1, [6, 0],
  ['d/M/yy', 'd MMM y', 'd MMMM \'de\' y', 'EEEE, d MMMM \'de\' y'],
  ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
  [
    '{1} {0}',
    '{1}, {0}',
    '{1} \'a\' \'les\' {0}',
  ],
  [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'ND', ':'],
  ['#,##0.###', '#,##0%', '#,##0.00 ¤', '#E0'], '€', 'euro',
  function(n: number):
      Plural {
        let i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length;
        if (i === 1 && v === 0) return Plural.One;
        return Plural.Other;
      }
];
