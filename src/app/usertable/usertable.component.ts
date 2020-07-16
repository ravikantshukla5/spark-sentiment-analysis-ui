import { Component, OnInit,ViewChild,AfterViewInit,ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';
import { TableService } from '../services/table.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { Tweet } from '../models/tweet.model';
import {MatPaginator, MatTableDataSource,MatButtonModule} from '@angular/material';

@Component({
  selector: 'usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  displayedColumns = ['id','user','createdAt','userLocation','location','tweetText','hashtags','retweet','language','sentiment','action'];
  constructor(private router: Router,private tableService: TableService,private changeDetectorRefs: ChangeDetectorRef) {
    setInterval(() => this.refresh(), 5000);
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new TableDataSource(this.tableService,this.paginator);
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.refresh();
  }
 deleteTweetMat(tweet: Tweet): void {
    alert("Are u sure to delete : "+tweet.id)
    this.tableService.deleteTweetMat(tweet.id).subscribe((response) => {
     alert("deleted id : "+tweet.id);
      });
    this.dataSource = new TableDataSource(this.tableService,this.paginator);
  }

 refresh() {
      this.tableService.getTweet().subscribe((res) => {
      this.dataSource = new TableDataSource(this.tableService,this.paginator);
    });
  }

}
export class TableDataSource extends DataSource<any> {
constructor(private tableService: TableService, public paginator : MatPaginator) {
    super();
  }
  connect(): Observable<Tweet[]> {
    return this.tableService.getTweet();
  }
  disconnect() {}
}
