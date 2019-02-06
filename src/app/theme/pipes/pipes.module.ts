import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePicturePipe } from './profilePicture/profilePicture.pipe';
import { ChatPersonSearchPipe } from './search/chat-person-search.pipe';
import { UserSearchPipe } from './search/user-search.pipe';
import { TruncatePipe } from './truncate/truncate.pipe';
import { MailSearchPipe } from './search/mail-search.pipe';
import { FilterPipe } from './search/productcat_search.pipe';
import { ProductbycategoryPipe } from '../../productbycategory.pipe';
import { SubcategorybycategoryPipe } from '../../subcategorybycategory.pipe';
import { StagesearchPipe } from '../../stagesearch.pipe';
@NgModule({
    imports: [
        CommonModule  ],
    declarations: [
        ProfilePicturePipe,
        ChatPersonSearchPipe,
        UserSearchPipe,
        TruncatePipe,
        MailSearchPipe,
        FilterPipe,
        ProductbycategoryPipe,
        SubcategorybycategoryPipe,
        StagesearchPipe
    ],
    exports: [
        ProfilePicturePipe,
        ChatPersonSearchPipe,
        UserSearchPipe,
        TruncatePipe,
        MailSearchPipe,
        FilterPipe,
        ProductbycategoryPipe,
        SubcategorybycategoryPipe,
        StagesearchPipe
    ]
})
export class PipesModule { }
