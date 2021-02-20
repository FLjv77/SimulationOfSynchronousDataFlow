import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from 'src/app/app.component';
import { Node, Edge} from '../../model/model';

@Component({
  selector: 'app-work-table',
  templateUrl: './work-table.component.html',
  styleUrls: ['./work-table.component.scss']
})
export class WorkTableComponent implements OnInit {

  modal = 'actor';
  angle = 0;
  selectedNodeIndex: number;
  selectedEdgeIndex: number;
  clockDuration: number;


  repit: number;


  edgeNull: Edge;
  topologyMatrix: number[][];

  firedNode: Array<number>;
  
  
  tokenRow: Array<number>;
  fireRow: Array<number>;
  actorList: Array<Node>;
  edgeList: Array<Edge>;

  spiner = false;

  constructor(private _snackBar: MatSnackBar) { 
    this.topologyMatrix = [];
    this.firedNode = new Array<number>();


    this.fireRow = new Array<number>();
    this.tokenRow = new Array<number>();


    this.actorList = new Array<Node>();
    this.edgeList  = new Array<Edge>();

    this.edgeNull = new Edge(0,0,0);
    this.selectedNodeIndex = 0;
    this.selectedEdgeIndex = 0;
    this.clockDuration = 0;

    this.repit = 0;
  }

  addNewActor() {
    let newActor = new Node('');
    this.actorList.push(newActor);

    this.fireRow.push(0);

    this.openSnackBar();
  }

  addNewEdge() {
    this.openSnackBar();

    this.tokenRow.push(0);

    let newEdge = new Edge(0,0,0);
    let newTopologyRow = new Array<number>();

    for(let i=0; i<this.actorList.length; i++) {
      newTopologyRow.push(0);
    }
    this.edgeList.push(newEdge);
    this.topologyMatrix.push(newTopologyRow);
  }

  setSelectedActorIndex(index: number) {
    this.selectedNodeIndex = index;   
    this.siwtchEdgeActor('actor');
  }

  setSelectedEdgeIndex(index: number) {
    this.selectedEdgeIndex = index;   

    this.siwtchEdgeActor('edge');
  }

  ngOnInit(): void {
  }

  setIndexForEdge(index: number) {
    for(let i=0; i<this.topologyMatrix[index].length; i++) {
      if(this.topologyMatrix[index][i] > 0)  this.edgeList[index].startToken = this.topologyMatrix[index][i];

      else if(this.topologyMatrix[index][i] < 0)  this.edgeList[index].endToken = this.topologyMatrix[index][i]*-1;

    }
   
  }


  cycleSdf() {
    this.spiner = true;
      setTimeout(()=>{
        this.readySDF();
        if(this.repit > 0) {
          console.log(this.repit);
          this.cycleSdf();
          this.repit --;
        }

       }, this.clockDuration);

  }

  reseRepite() {
    this.repit = 10;
  }

  readySDF() { 
    for(let i=0; i < this.actorList.length; i++) {
      this.fireRow[i] = 0;
    }

    for(let i=0; i<this.topologyMatrix.length; i++) {
      for(let t=0; t<this.actorList.length; t++) {
        if(this.topologyMatrix[i][t] < 0) {
          if(this.topologyMatrix[i][t] * -1 <= this.tokenRow[i]) {
            this.fireRow[t] = 1;
          }
          break;
        }
      }
    }

    this.fireSdf();
  }
  
  fireSdf() {
    for(let i=0; i<this.topologyMatrix.length; i++) {
      let res:number;
      res =0;

      for(let t=0; t<this.topologyMatrix[0].length; t++) {
        res = res + this.topologyMatrix[i][t] * this.fireRow[t];
      }
      this.tokenRow[i] = this.tokenRow[i] + res;
    }    
  }


  routateEdge(index: number){
    this.edgeList[index].angle +=5;
  }

  deroutateEdge(index: number){
    this.edgeList[index].angle -=5;
  }



  openSnackBar() {
    this._snackBar.openFromComponent(SnackComponent, {
      duration: 8000,
      panelClass: ['blue-snackbar']
    });
  }


  siwtchEdgeActor(action: string) {
    this.modal = action;
  }

  getListByLenght(lenght: number): Array<number> {
    let res = new Array<number>();
    for(let i=0; i<lenght; i++) {
      res.push(i);
    }
    return res;
  }

}
