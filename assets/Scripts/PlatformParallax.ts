import { _decorator, CCInteger, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlatformParallax')
export class PlatformParallax extends Component {
    @property({ type: CCInteger })
    public speed: number = 50;

    @property({ type: CCInteger })
    public minPos: number = -320;

    @property({ type: CCInteger })
    public resetPos: number = 640;

    start() {

    }

    update(deltaTime: number) {
        let _currentPos = this.node.getPosition();
        
        if (_currentPos.x >= this.minPos) {
            this.node.setPosition(_currentPos.x -= this.speed * deltaTime, 0);
        } else {
            this.node.setPosition(this.resetPos, 0);       
        }
    }
}

