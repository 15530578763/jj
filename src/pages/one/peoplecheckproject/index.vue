<template>
    <div class="peoplecheckproject">

        <contentframe>

            <div slot="top">
                <span class="iq-fontweight">盘点项目</span>
                <div class="step">
                    <div class="step-ele">
                        <el-steps :active="stepIndex" align-center>
                            <el-step title="基本信息" ></el-step>
                            <el-step title="九宫格设置" ></el-step>
                            <el-step title="盘点对象设置" ></el-step>
                            <el-step title="数据来源设置" ></el-step>
                            <el-step title="标准会议" ></el-step>
                            <el-step title="审批流程" ></el-step>
                        </el-steps>
                    </div>
                </div>
            </div>
            <div slot="middle">
                <div style="height: 3000px;" class="content">
                    <el-row >
                        <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
                        <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
                        <el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
                    </el-row>
                </div>
            </div>

        </contentframe>
        
    </div>
</template>

<script>
import contentframe from '@/components/common/contentframe'
export default {
    name: 'peoplecheckproject',
    components: {
        contentframe,
    },
    data() {
        return{
            stepIndex: 1,
        }
    }
}
</script>

<style scoped>
.peoplecheckproject{
    height: 100%;
}
.peoplecheckproject .step{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.peoplecheckproject .step-ele{
    width: 70%;
}
</style>
<style >
.peoplecheckproject .step-ele .el-step__title{
    font-size: 14px;
}
.peoplecheckproject .is-finish .el-step__icon{
    background: #0074F2;
    color: #fff;
}
.peoplecheckproject .is-finish .el-step__icon.is-text{
    border: 2px solid #0074F2;
}
.peoplecheckproject .is-finish .el-step__line{
    background: #0074F2;
}
.peoplecheckproject .is-process .el-step__icon{
    background: #C0C4CC;
    color: #fff;
}
.peoplecheckproject .is-process .el-step__icon.is-text{
    border: 2px solid #C0C4CC;
}
.peoplecheckproject .is-process .el-step__line{
    background: #C0C4CC;
}
.peoplecheckproject .el-step__title.is-process{
    font-weight: 100 !important;
    color: #C0C4CC !important;
}
.peoplecheckproject .is-wait .el-step__icon{
    background: #C0C4CC;
    color: #fff;
}
.peoplecheckproject .is-wait .el-step__icon.is-text{
    border: 2px solid #C0C4CC;
}
.peoplecheckproject .is-wait .el-step__line{
    background: #C0C4CC;
}

  .el-row {
    margin-bottom: 20px; &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>




