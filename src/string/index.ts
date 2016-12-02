import {NgModule} from '@angular/core';

import {LeftPadPipe} from './left-pad.pipe';
import {MatchPipe} from './match.pipe';
import {PadPipe} from './pad.pipe';
import {ReplacePipe} from './replace.pipe';
import {RightPadPipe} from './right-pad.pipe';
import {SplitPipe} from './split.pipe';
import {TestPipe} from './test.pipe';
import {TrimPipe} from './trim.pipe';
import {NewlinesPipe} from './newlines.pipe';
import {CapitalizePipe} from './capitalize.pipe';
import {UpperFirstPipe} from './upperfirst.pipe';
import {TemplatePipe} from './template.pipe';
import {EncodeURIPipe} from './encode-uri.pipe';
import {EncodeURIComponentPipe} from './encode-uri-component.pipe';
import {TruncatePipe} from './truncate.pipe';
import {RepeatPipe} from './repeat.pipe';
import {SlugifyPipe} from './slugify.pipe';

import {StripTagsPipe} from "./strip-tags.pipe";
import {StartsWithPipe} from "./starts-with.pipe";
import {EndsWithPipe} from "./ends-with.pipe";
import {StringularPipe} from "./stringular.pipe";
import {LatinizePipe} from "./latinize.pipe";
import {WrapPipe} from "./wrap.pipe";

export * from './left-pad.pipe';
export * from './match.pipe';
export * from './pad.pipe';
export * from './replace.pipe';
export * from './right-pad.pipe';
export * from './split.pipe';
export * from './test.pipe';
export * from './trim.pipe';
export * from './newlines.pipe';
export * from './capitalize.pipe';
export * from './upperfirst.pipe';
export * from './template.pipe';
export * from './encode-uri.pipe';
export * from './encode-uri-component.pipe';
export * from './truncate.pipe';
export * from './repeat.pipe';
export * from './slugify.pipe';
export * from './strip-tags.pipe';
export * from './starts-with.pipe';
export * from './ends-with.pipe';
export * from './stringular.pipe';
export * from './latinize.pipe';
export * from './wrap.pipe';


@NgModule({
    declarations: [
        LeftPadPipe,
        MatchPipe,
        PadPipe,
        ReplacePipe,
        RightPadPipe,
        SplitPipe,
        TestPipe,
        TrimPipe,
        NewlinesPipe,
        CapitalizePipe,
        UpperFirstPipe,
        TemplatePipe,
        EncodeURIPipe,
        EncodeURIComponentPipe,
        TruncatePipe,
        RepeatPipe,
        SlugifyPipe,
        StripTagsPipe,
        StartsWithPipe,
        EndsWithPipe,
        StringularPipe,
        LatinizePipe,
        WrapPipe
    ],
    exports: [
        LeftPadPipe,
        MatchPipe,
        PadPipe,
        ReplacePipe,
        RightPadPipe,
        SplitPipe,
        TestPipe,
        TrimPipe,
        NewlinesPipe,
        CapitalizePipe,
        UpperFirstPipe,
        TemplatePipe,
        EncodeURIPipe,
        EncodeURIComponentPipe,
        TruncatePipe,
        RepeatPipe,
        SlugifyPipe,
        StripTagsPipe,
        StartsWithPipe,
        EndsWithPipe,
        StringularPipe,
        LatinizePipe,
        WrapPipe
    ]
})
export class NgStringPipesModule {
}
