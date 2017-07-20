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
  'cs',
  [
    ['dop.', 'odp.'],
    ,
  ],
  ,
  [
    ['N', 'P', 'Ú', 'S', 'Č', 'P', 'S'], ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],
    ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
    ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so']
  ],
  ,
  [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro'],
    [
      'ledna', 'února', 'března', 'dubna', 'května', 'června', 'července', 'srpna', 'září', 'října',
      'listopadu', 'prosince'
    ]
  ],
  [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro'],
    [
      'leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen',
      'listopad', 'prosinec'
    ]
  ],
  [
    ['př.n.l.', 'n.l.'],
    ['př. n. l.', 'n. l.'],
  ],
  1, [6, 0], ['dd.MM.yy', 'd. M. y', 'd. MMMM y', 'EEEE d. MMMM y'],
  ['H:mm', 'H:mm:ss', 'H:mm:ss z', 'H:mm:ss zzzz'],
  [
    '{1} {0}',
    ,
    ,
  ],
  [',', ' ', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
  ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'], 'Kč', 'česká koruna',
  function(n: number):
      Plural {
        let i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length;
        if (i === 1 && v === 0) return Plural.One;
        if (i === Math.floor(i) && i >= 2 && i <= 4 && v === 0) return Plural.Few;
        if (!(v === 0)) return Plural.Many;
        return Plural.Other;
      }
];
