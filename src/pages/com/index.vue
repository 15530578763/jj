<template>
<div>

    <contentframesecond>
        <div slot="top" style="height: 3000px;">
            <div style="padding: 10px 0;">
                <el-button type="primary" @click="clickDialog()">文件上传</el-button>
            </div>
            <div style="height: 1px;background: #ccc;"></div>
            <div style="padding: 10px 0;">
                <el-calendar v-model="value"></el-calendar>
            </div>
            <div style="height: 1px;background: #ccc;"></div>
            <div style="padding: 10px 0;">
                <el-table :data="tableData" height="400" border style="width: 100%">
                    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
                    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
                    <el-table-column prop="address" label="地址"> </el-table-column>
                </el-table>
                <div class="pagination">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400">
                    </el-pagination>
                </div>
            </div>
        </div>
    </contentframesecond>

    <dialogBox :showFlag="dialogShow" :title="'X轴导入数据'" :width="'40%'" :category="'2'" :top="'30vh'"
        @dialogCloseErreo="dialogCloseErreo" @dialogClose="dialogClose" @dialogOk="dialogOk" >
        <div slot="main">
            <div >
                <el-steps direction="vertical" :space="70" :active="1">
                    <el-step >
                        <div slot="title">
                            <span class="file-steppadding">第一步</span>
                            <span class="file-steppadding">数据模板下载</span>
                            <span class="file-steppadding cursor" @click="clickDown()"><i class="el-icon-download"></i></span>
                        </div>
                    </el-step>
                    <el-step>
                        <div slot="title">
                            <span class="file-steppadding file-text-top">第二步</span>
                            <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-change="handleChange"
                                :file-list="fileList">
                                
                                <span class="file-steppadding">数据上传</span>
                                <span class="file-steppadding cursor" ><i class="el-icon-folder"></i></span>
                                <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                            </el-upload>
                        </div>
                    </el-step>
                    <span class="cursor iq-fontweight iq-fontsizenormal" @click="fileUpOk()">确定</span>
                </el-steps>
            </div>
        </div>
    </dialogBox>
    
</div>
</template>

<script>
import contentframesecond from '@/components/common/contentframesecond';
import dialogBox from '@/components/common/dialogBox'
export default {
    name: 'com',
    components: {
        contentframesecond,
        dialogBox,
    },
    data() {
        return {
            dialogShow: false,
            fileList: [],
            value: new Date(),
            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-08',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }],
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4,

        }
    },
    methods: {
        clickDialog() {
            this.dialogShow = true;
        },
        dialogCloseErreo(flag) {
            this.dialogShow = flag;
        },
        dialogClose(flag) {
            this.dialogShow = flag;
        },
        dialogOk(flag) {
            this.dialogShow = flag;
        },
        clickDown() {
            window.location="";
        },
        handleChange(file, fileList) {
            this.fileList = fileList.slice(-3);
        },
        fileUpOk() {
            this.dialogShow = false;
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    },
}
</script>

<style scoped>
.file-steppadding{
    padding: 0 10px;
}
.upload-demo{
    display: inline-block;
}
.file-text-top{
    vertical-align: top;
}
.pagination{
    padding: 10px 0;
    text-align: center;
}
</style>

